"""create nut.settings table

Revision ID: ce55e791a72e
Revises: 2c79920f0ca9
Create Date: 2023-05-25 14:06:10.630392

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ce55e791a72e'
down_revision = '2c79920f0ca9'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'settings',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('key', sa.String(length=255), nullable=False),
        sa.Column('user_id', sa.Integer),
        sa.Column('salt', sa.LargeBinary),
        sa.Column('value', sa.LargeBinary, nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_settings_key', 'settings', ['key'])


def downgrade() -> None:
    op.drop_table('settings')
